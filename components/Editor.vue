<template>
  <div class="h-full" id="editorjs"></div>
</template>
<script setup>
  // import EditorJS from '@editorjs/editorjs'
  // import Embed from '@editorjs/embed'
  // import Header from '@editorjs/header'
  // import Paragraph from '@editorjs/paragraph'
  // import AlignmentTuneTool from 'editorjs-text-alignment-blocktune'
  // import Delimiter from '@editorjs/delimiter'
  // import ImageTool from '@editorjs/image'
  import { onMounted } from 'vue'
  
  let EditorJS = null
  let Embed = null
  let Header = null
  let Paragraph = null
  let Delimiter = null

  if (process.client) {
    EditorJS = await import('@editorjs/editorjs')
    Header = await import('@editorjs/header')
    Embed = await import('@editorjs/embed')
    Paragraph = await import('@editorjs/paragraph')
    Delimiter = await import('@editorjs/delimiter')
  }

  onMounted(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3
          },
          tunes: ['alignTune']
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          tunes: ['alignTune']
        },
        embed: {
          class: Embed,
          inlineToolbar: true,
          config: {
            services: {
              youtube: true,
              twitter: true,
              facebook: true,
              pinterest: true
            }
          }
        },
        delimiter: Delimiter,
        // image: {
        //   class: ImageTool,
        //   config: {
        //     endpoints: {
        //       byFile: 'https://dev-live-backend.atreez.com/api/upload', // Your backend file uploader endpoint
        //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        //     }
        //   }
        // },
        // alignTune: {
        //   class:AlignmentTuneTool,
        //   config:{
        //     default: "left",
        //     blocks: {
        //       header: 'center',
        //       paragraph: 'left'
        //     }
        //   },
        // }
      }
    })
  })

  

  const save = () => {
    // editor.save().then((outputData) => {
    //   console.log('Article data: ', outputData)
    // }).catch((error) => {
    //   console.log('Saving failed: ', error)
    // })
  }
  

</script>
<style scoped>
.btn {
  @apply mt-16px py-6px px-12px border-lg border-2px border-light-200 transition duration-300 hover:border-black hover:bg-black hover:text-white active:border-black focus:border-black focus-visible:border-black visited:border-black
}
</style>