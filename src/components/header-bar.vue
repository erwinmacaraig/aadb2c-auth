<template>
  <header>
      
    <nav
      class="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
    <HeaderBarBrand />
      <HeaderBarLinks />
    </nav>
  </header>
</template>

<script>

import HeaderBarLinks from '@/components/header-bar-links';
import HeaderBarBrand from '@/components/header-bar-brand';
export default {
  name: 'HeaderBar',
  components: { HeaderBarBrand, HeaderBarLinks },
};
</script>
