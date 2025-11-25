<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <footer
        class="text-white w-full flex-col items-stretch pt-30 px-20 pb-10"
        :style="{
        backgroundColor: '#306067',
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px'
        }"
    >
    <div class="flex justify-between align-top">
    <div>
        <div class="flex text-left">
                <ul class="me-15">
                <li><RouterLink to="/">Inicio</RouterLink></li>
                <li><RouterLink to="/planes">Planes</RouterLink></li>
                <li><RouterLink to="/about">Sobre Kälm</RouterLink></li>
                <li><RouterLink to="/contact">Contacto</RouterLink></li>
                </ul>
                <ul>
                <li><RouterLink to="/equipo">Equipo Kälm</RouterLink></li>
                <li><RouterLink to="/empleos">Empleos</RouterLink></li>
                <li><RouterLink to="/blog">Blog</RouterLink></li>
                </ul>
            </div>
            <div class="flex items-start justify-between flex-col gap-10 mt-8">
                <ul class="flex gap-3 h-5">
                <li class="contents"><a href="https://www.instagram.com/kalm_oficial/"  target=”_blank” class="bg-[url(assets/imgs/insta-light.png)] bg-no-repeat bg-contain w-5" style="font-size: 0;">Instagram</a></li>
                <li class="contents"><a href="https://www.instagram.com/kalm_oficial/"  target=”_blank” class="bg-[url(assets/imgs/tiktok-light.png)] bg-no-repeat bg-contain w-5" style="font-size: 0;">Tik Tok</a></li>
                <li class="contents"><a href="https://www.instagram.com/kalm_oficial/"  target=”_blank” class="bg-[url(assets/imgs/pinterest-light.png)] bg-no-repeat bg-contain w-5" style="font-size: 0;">Pinterest</a></li>
                </ul>
            </div>
    </div>
        <img src="../assets/imgs/logo-kalm-light.svg" alt="Imagen decorativa" class="h-30 object-contain">
    </div>
    <p class="text-center mt-10 text-white">Copyright &copy; 2025 - Kälm. Todos los derechos reservados. Buenos Aires, Argentina.</p>
        <slot />
    </footer>
</template>
