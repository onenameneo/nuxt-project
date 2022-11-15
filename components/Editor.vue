<template>
  <div class="w-full h-full" id="editorjs"></div>
</template>
<script setup>
  
  let EditorJS = null
  let Embed = null
  let Header = null
  let Paragraph = null
  let Delimiter = null
  let ImageTool = null
  let AlignmentTuneTool = null
  let editor = null

  if (process.client) {
    EditorJS = await import('@editorjs/editorjs')
    Header = await import('@editorjs/header')
    console.log(Header)
    Embed = await import('@editorjs/embed')
    Paragraph = await import('@editorjs/paragraph')
    Delimiter = await import('@editorjs/delimiter') 
    ImageTool = await import('@editorjs/image')
    AlignmentTuneTool = await import('editorjs-text-alignment-blocktune')
  }

  const props = defineProps(['preData'])

  onMounted(() => {
    nextTick(() => {
      console.log('EditorJS', EditorJS)
      editor = new EditorJS.default({
        data: props.preData || {},
        holder: 'editorjs',
        tools: {
          header: {
            class: Header.default,
            config: {
              placeholder: 'Enter a header',
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 3
            },
            tunes: ['alignTune']
          },
          paragraph: {
            class: Paragraph.default,
            tunes: ['alignTune']
          },
          embed: {
            class: Embed.default,
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
          delimiter: Delimiter.default,
          image: {
            class: ImageTool.default,
            config: {
              endpoints: {
                byFile: 'https://dev-live-backend.atreez.com/api/upload', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
              }
            }
          },
          alignTune: {
            class:AlignmentTuneTool.default,
            config:{
              default: "left",
              blocks: {
                header: 'center',
                paragraph: 'left'
              }
            },
          }
        }
      })
    })
  })

  const getData = async () => {
    return await editor.save()
  }

  defineExpose({ getData })
  

  const save = () => {
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    })
  }
  
  watch(() => props.preData, (val) => {
    console.log('val', val)
    editor.blocks.render(val)
  })

</script>
<style scoped>
.btn {
  @apply mt-[16px] py-[6px] px-[12px] border-2 border-[2px] transition duration-300 hover:border-black hover:bg-black hover:text-white active:border-black focus:border-black focus-visible:border-black visited:border-black
}
</style>