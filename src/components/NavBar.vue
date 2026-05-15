<template>
  <header class="navbar">
    <div class="container">
      <RouterLink to="/" class="brand">
        <img src="/images/logo.png" alt="AccuraTimer" class="brand-logo" />
        <span class="brand-name">AccuraTimer</span>
      </RouterLink>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>
        <RouterLink to="/terms">Terms</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background: var(--black);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-logo {
  height: 36px;
  width: 36px;
  object-fit: contain;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--white);
}

.nav-links a.router-link-exact-active {
  color: var(--red-light);
}

@media (max-width: 600px) {
  .nav-links {
    gap: 16px;
  }

  .nav-links a {
    font-size: 0.85rem;
  }

  .brand-name {
    display: none;
  }
}
</style>
