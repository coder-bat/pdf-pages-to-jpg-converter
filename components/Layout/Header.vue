<template>
  <div class="w-full m-auto absolute top-0 self-center bg-white">
    <div
      class="
        flex
        justify-between
        flex-row
        max-w-screen-xl
        px-3
        md:px-0
        py-5
        mx-auto
        md:items-center
      "
    >
      <div
        class="
          flex flex-row
          items-center
          justify-between
          lg:justify-start
          flex-grow-0
        "
      >
        <a
          href="/"
          class="
            md:text-xl
            tracking-tighter
            text-primary-dark
            transition
            duration-500
            ease-in-out
            transform
            tracking-relaxed
            lg:pr-8
          "
        >
          &lt;coder-bat /&gt;
        </a>
      </div>
      <nav
        class="
          flex flex-col flex-grow
          md:flex md:justify-end md:flex-row
          flex-grow-1
        "
      >
        <ul
          class="
            space-y-2
            list-none
            flex flex-col
            justify-end
            items-end
            lg:space-y-0 lg:items-center lg:inline-flex
          "
        >
          <li>
            <a
              href="/"
              class="
                px-2
                lg:px-6
                py-6
                text-sm
                border-b-2 border-transparent
                hover:border-primary-dark
                leading-[22px]
                md:px-3
                text-gray-300
                hover:text-primary-dark
                transition
                duration-500
              "
            >
              Convert PDF pages to JPG
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                px-2
                lg:px-6
                py-6
                text-sm
                border-b-2 border-transparent
                hover:border-primary-dark
                leading-[22px]
                md:px-3
                text-gray-300
                hover:text-primary-dark
                transition
                duration-500
              "
            >
              REST API - Coming soon
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>