import {  readable } from "svelte/store";


// hero section
export const usageCountData=readable({userActive:'3800+ USER ACTIVE',trustedCopmanies:'230+ TRUSTED BY COMPANY',
transaction:'$230M+ TRANSACTION'
})

// logo image src
export const logoSrc=readable('/src/assets/logo.svg')

// footer links
export const footerLinks=readable([
  {title:'Useful Links',links:['Content','How it works','Create','Explore','Terms & Services']
},
{
  title:'Community',
  links:['Help Center','Blog','Suggestions','Newsletters']
}

,
{
  title:'Partner',
  links:['Our Partners','Become a Partner']
}
])