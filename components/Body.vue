<template>
  <div>
    <div
      v-if="!pagesToImages.length"
      class="
        flex flex-col
        w-full
        gap-12
        min-h-screen
        items-center
        justify-center
        text-center
        p-3
        pt-12
        md:pt-4
        m-auto
        max-w-screen-xl
      "
      id="app"
    >
      <h1 class="text-2xl font-bold">Convert PDF pages to JPG</h1>
      <div class="flex flex-col gap-3">
        <h2>
          Upload file below to extract PDF pages and convert them to JPG file.
          Once the conversion is completed, you can download single page or zip
          of all pages.
        </h2>
        <p class="text-sm">
          NOTE: FILES ARE <span class="font-bold">NOT</span> STORED IN SERVER
          (do I want more PDF in my life (:D) nor I have storage to store
          them.). Find source code of project
          <a
            href="https://github.com/coder-bat/pdf-pages-to-jpg-converter"
            target="_blank"
            class="text-primary-dark underline"
            >here</a
          >.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <div
          class="p-12 bg-gray-100 border border-gray-300"
          @dragover="dragover"
          @dragleave="dragleave"
          @drop="drop"
        >
          <input
            type="file"
            name="fields[assetsFieldHandle][]"
            id="assetsFieldHandle"
            class="w-px h-px opacity-0 overflow-hidden absolute"
            @change="onChange"
            ref="file"
            accept=".pdf"
          />

          <label for="assetsFieldHandle" class="block cursor-pointer">
            <div>
              Click here or drag and drop your
              <span class="underline">PDF</span> files here
            </div>
          </label>
          <ul class="mt-4" v-if="this.filelist.length" v-cloak>
            <li class="text-sm p-1" v-for="file in filelist" :key="file.name">
              {{ file.name }}
              <button
                class="ml-2"
                type="button"
                @click="remove(filelist.indexOf(file))"
                title="Remove file"
              >
                remove
              </button>
            </li>
          </ul>
        </div>
        <div
          v-if="typeError"
          class="p-6 border-l-4 border-red-500 rounded-r-xl bg-red-50"
        >
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="w-5 h-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="ml-3">
              <div class="text-sm text-red-600">
                <p>This tool only supports PDF file.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 my-3">
          <p>Select quality</p>
          <select
            class="
              block
              w-full
              px-5
              py-3
              text-base text-neutral-600
              placeholder-gray-300
              transition
              duration-500
              ease-in-out
              transform
              border border-transparent
              rounded-lg
              bg-gray-50
              focus:outline-none
              focus:border-transparent
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-gray-300
            "
            v-model="selectedQuality"
            @change="changeQuality"
          >
            <option value="1">Low (fast)</option>
            <option value="2">Decent</option>
            <option value="3">Good</option>
            <option value="5">Very good (slow)</option>
          </select>
        </div>
        <button
          type="submit"
          class="
            flex
            items-center
            justify-center
            px-10
            py-4
            text-base
            font-medium
            text-center text-white
            transition
            duration-500
            ease-in-out
            transform
            bg-primary
            rounded-xl
            hover:bg-primary-dark
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-primary-dark
            self-center
          "
          :class="{ 'pointer-events-none': !fileSubmitted }"
          @click="submitPdf"
        >
          Submit
        </button>
      </div>
      <div class="flex flex-col gap-3">
        <p class="text-xs">
          This is an open-<a
            href="https://github.com/coder-bat/pdf-pages-to-jpg-converter"
            target="_blank"
            class="text-primary underline"
            >source</a
          >
          project, made, because I wanted to achive such task recently (in 2021;
          in case you read 3 years later), and couldn't find a good tool online.
          Found a way to achive it with JS and figured I'll learn and host for
          someone who might find it useful. Checkout my contact or my portfolio
          <a
            href="https://coder-bat.com"
            target="_blank"
            class="text-primary underline"
            >here</a
          >.
        </p>
        <p class="text-xs">
          This website doesn't and will not have any ads or promotional content.
          But stuff still costs. So, if you'd like to buy me a coffee or litte
          bit of hosting, feel free to click on donate button below. :)
        </p>
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="business" value="BCNV8LLW5YKPY" />
          <input type="hidden" name="no_recurring" value="0" />
          <input
            type="hidden"
            name="item_name"
            value="Thank you for your support. I will try and keep making useful tools! :) 

Have a good day!"
          />
          <input type="hidden" name="currency_code" value="AUD" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_AU/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </div>
    <div
      v-else-if="pagesToImages.length"
      class="
        min-h-screen
        p-3
        md:p-12
        pt-12
        md:pt-24
        flex flex-col
        items-center
        justify-center
        gap-6
        max-w-screen-xl
        m-auto
      "
    >
      <h1 v-if="converting" class="text-2xl font-bold">Converting ...</h1>
      <h1 v-else class="text-2xl font-bold">Conversion complete</h1>
      <div class="flex flex-col gap-6 md:flex-row w-full md:w-auto">
        <button
          v-if="!converting"
          class="
            inline-flex
            w-full
            md:w-auto
            items-center
            justify-center
            px-8
            py-3
            text-base
            font-medium
            text-center text-white
            transition
            duration-500
            ease-in-out
            transform
            bg-blue-400
            rounded-xl
            hover:bg-blue-500
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-blue-500
          "
          @click="downloadAll"
        >
          Download All
        </button>
        <button
          v-if="!converting"
          class="
            inline-flex
            w-full
            md:w-auto
            items-center
            justify-center
            px-8
            py-3
            text-base
            font-medium
            text-center text-white
            transition
            duration-500
            ease-in-out
            transform
            bg-blue-400
            rounded-xl
            hover:bg-blue-500
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-blue-500
          "
          @click="startAnotherConversion"
        >
          Convert another file
        </button>
      </div>
      <p>Put mouse pointer on single image to download it</p>
      <div class="flex gap-6 flex-wrap justify-center">
        <div
          class="single-page relative"
          v-for="(img, index) in pagesToImages"
          :key="index"
        >
          <img :src="img" class="max-h-card-grid shadow-sm" />
          <div
            class="
              bg-primary bg-opacity-50
              cursor-pointer
              absolute
              top-0
              left-0
              w-full
              h-full
              z-10
              opacity-0
              flex flex-col
              justify-center
              gap-4
              items-center
              hover:opacity-100
              transition
            "
          >
            <a
              :href="img"
              class="
                flex
                items-center
                justify-center
                px-10
                py-4
                text-base
                font-medium
                text-center text-white
                transition
                duration-500
                ease-in-out
                transform
                bg-blue-400
                rounded-xl
                hover:bg-blue-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-blue-500
                mt-6
              "
              download
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 text-center max-w-screen-xl">
        <p class="text-xs">
          This is an open-<a
            href="https://github.com/coder-bat/pdf-pages-to-jpg-converter"
            target="_blank"
            class="text-primary underline"
            >source</a
          >
          project, made, because I wanted to achive such task recently (in 2021;
          in case you read 3 years later), and couldn't find a good tool online.
          Found a way to achive it with JS and figured I'll learn and host for
          someone who might find it useful. Checkout my contact or my portfolio
          <a
            href="https://coder-bat.com"
            target="_blank"
            class="text-primary underline"
            >here</a
          >.
        </p>
        <p class="text-xs">
          This website doesn't and will not have any ads or promotional content.
          But stuff still costs. So, if you'd like to buy me a coffee or litte
          bit of hosting, feel free to click on donate button below. :)
        </p>
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="business" value="BCNV8LLW5YKPY" />
          <input type="hidden" name="no_recurring" value="0" />
          <input
            type="hidden"
            name="item_name"
            value="Thank you for your support. I will try and keep making useful tools! :) 

Have a good day!"
          />
          <input type="hidden" name="currency_code" value="AUD" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_AU/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import pdfjsLib from 'pdfjs-dist'
import { downloadZip } from 'client-zip/index.js'

export default {
  data() {
    return {
      loadingState: false,
      pagesToImages: [],
      filelist: [],
      zipFileContent: [],
      fileSubmitted: false,
      typeError: false,
      conversionQuality: 1,
      selectedQuality: 3,
      converting: true,
    }
  },
  methods: {
    scanPdf() {
      pdfjsLib.disableWorker = true
      const file = this.filelist[0]
      this.converting = true
      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        const typedarray = new Uint8Array(e.target.result)
        pdfjsLib.getDocument(typedarray).promise.then(async (pdf) => {
          this.totalPages = pdf.numPages

          for (let i = 1; i <= pdf.numPages; i++) {
            await pdf.getPage(i).then(async (page) => {
              const viewport = page.getViewport({
                scale: this.conversionQuality,
              })
              const canvas = document.createElement('canvas')
              const context = canvas.getContext('2d')

              canvas.height = viewport.height
              canvas.width = viewport.width
              canvas.style.width = '100%'
              canvas.style.height = '100%'

              const task = page.render({ canvasContext: context, viewport })
              this.pagesToImages.push(
                await task.promise.then(() => {
                  return canvas.toDataURL('image/jpeg')
                })
              )
              if (this.pagesToImages.length === pdf.numPages) {
                this.converting = false
              }
            })
          }
        })
      }
      fileReader.readAsArrayBuffer(file)
    },

    onChange() {
      this.filelist = [...this.$refs.file.files]
      if (this.filelist.length > 0) {
        this.fileSubmitted = true
        this.typeError = false
      }
    },

    remove() {
      this.filelist.splice(0, this.filelist.length)
      if (this.$refs.file) this.$refs.file.value = null
      this.fileSubmitted = false
    },

    dragover(event) {
      event.preventDefault()
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100')
        event.currentTarget.classList.add('bg-green-300')
      }
    },

    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100')
      event.currentTarget.classList.remove('bg-green-300')
    },

    drop(event) {
      event.preventDefault()
      const file = event.dataTransfer.files[0]
      if (file.type !== 'application/pdf') {
        this.typeError = true
        return
      }

      this.$refs.file.files = event.dataTransfer.files
      this.typeError = false
      this.onChange() // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100')
      event.currentTarget.classList.remove('bg-green-300')
    },

    submitPdf() {
      this.loadingState = true
      this.scanPdf()
    },

    async downloadAll() {
      this.pagesToImages.forEach((element, index) => {
        this.zipFileContent.push(
          this.srcToFile(element, `page-${index}.jpg`, 'image/jpeg')
        )
      })

      // get the ZIP stream in a Blob
      const blob = await downloadZip(this.zipFileContent).blob()

      // make and click a temporary link to download the Blob
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `${this.filelist[0].name}.zip`
      link.click()
      link.remove()
    },

    dataURItoBlob(dataURI) {
      const tempArr = []
      dataURI.forEach((element) => {
        // convert base64 to raw binary data held in a string
        const byteString = atob(element.split(',')[1])

        // separate out the mime component
        const mimeString = element.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        const ab = new ArrayBuffer(byteString.length)
        const ia = new Uint8Array(ab)
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i)
        }

        tempArr.push(new Blob([ab], { type: mimeString }))
      })
      return tempArr
    },

    async srcToFile(src, fileName, mimeType) {
      return await fetch(src)
        .then(function (res) {
          return res.arrayBuffer()
        })
        .then(function (buf) {
          return new File([buf], fileName, { type: mimeType })
        })
    },

    changeQuality() {
      this.conversionQuality = this.selectedQuality
    },

    startAnotherConversion() {
      this.pagesToImages = []
      this.remove()
    },
  },
}
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>