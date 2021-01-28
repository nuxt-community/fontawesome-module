declare module "@nuxtjs/fontawesome" {
    interface NuxtFontawesomeOptions {
        /**
         * Default: `"FontAwesomeIcon"`  
         * Change component name. Eg set to fa to use <fa icon="" ... />.  
         * Also see [suffix](https://github.com/nuxt-community/fontawesome-module#suffix)  
         * It's strongly recommended to use [PascalCase](https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended) for component names
        */
        component?: string
        /**
         * Default: `true`
         * Boolean to indicate if the layers component should be registered globally.
         * Name of the component will be `${options.component}-layers, fe <fa-layers ... />`
        */
        userLayers?: boolean
        /**
         * Default: `true`
         * Boolean to indicate if the layers component should be registered globally. Name of the component will be the `${options.component}-layers-text, fe <fa-layers-text ... />`
         */
        useLayersText?: boolean
        /**
         * Which icons you will use. Set tue `true` to import everything.  
         * FontAwesome [currently](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) supports 5 icon styles of which 3 are freely available (partially).  
         */
        icons: Icons
        /**
         * See `icons` for how to use, but always uses pro imports.
         */
        proIcons: Icons
        /**
         * Default: `true`
         * If the module should automatically add the fontawesome styles to the global css config. It works by unshifting @fortawesome/fontawesome-svg-core/styles.css onto the nuxt.options.css property.
         */
        addCss?: boolean
        /**
         * Default: `false`  
         * Boolean whether to append -icon to the icon component name.
         * This option exists as the component name option is also used for the layer components and you might not want to add `-icon` to those
         */
        suffix?: boolean
    }

    interface Icons {
        solid?: string[] | true,
        regular?: string[] | true,
        light?: string[] | true,
        duotone?: string[] | true,
        brands?: string[] | true
    }
}
