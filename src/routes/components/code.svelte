<script context='module' lang='ts'>

const loadedLanguages: Record<string, boolean> = {}

</script>

<script lang='ts'>

import pkg from '../../../package.json'

export let language = 'typescript'
export let code: string
export let theme: 'vs' | 'vsc-dark-plus' = 'vs'

let element: HTMLElement

const version = pkg.devDependencies.prismjs.replace('^', '')

const cdn = (src: string) =>
  `https://cdnjs.cloudflare.com/ajax/libs/prism/${version}/${src}`

const script = (src: string) =>
  new Promise((resolve, reject) => {
    const el = document.createElement('script')
    el.async = true
    el.src = src
    el.addEventListener('load', resolve)
    el.addEventListener('error', reject)
    document.head.append(el)
  })

const highlight = async () => {
  const { Prism } = window as { Prism: undefined | typeof import('prismjs') }

  if (!Prism) {
    await script(cdn('prism.min.js'))
  }

  if (!loadedLanguages[language] && language) {
    await script(cdn(`components/prism-${language}.min.js`))
    loadedLanguages[language] = true
  }

  window.Prism.highlightElement(element)
}

const formatCode = (input: string): string => {
  const htmlEntities: Record<string, string> = {
    '<': '&lt',
    '>': '&gt',
    '/': '&#47',
  }

  let formattedCode = input
  for (const [key, value] of Object.entries(htmlEntities)) {
    if (formattedCode) {
      formattedCode = formattedCode.replaceAll(key, value)
    }
  }

  return formattedCode
}

$: {
  if (element && code) {
    element.innerHTML = formatCode(code)
    highlight()
  }
}

</script>

<pre class='flex-1 !bg-[#f8f8f8] !border-none !my-4 !mx-0 !py-0 !px-4'>
  <code bind:this={element} class='language-{language} font-mono'>
    {code}
  </code>
</pre>

<link
  rel='stylesheet'
  crossorigin='anonymous'
  referrerpolicy='no-referrer'
  href='https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-{theme}.min.css'
/>
