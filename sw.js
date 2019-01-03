
const CACHE_STATIC    = 'static-v1';
const CACHE_INMUTABLE = 'inmutable-v1';
const CACHE_DYNAMIC   = 'dynamic-v1';



self.addEventListener('install', e=>{
    
    const respuesta = caches.open(CACHE_STATIC).then(res=>{
        
        return res.addAll([
            //'/',
            '/index.html',
            'css/styles.css',
            'js/app.js',
            'sw.js'
        ]);
        
    });
    
    e.waitUntil(respuesta);
    
});


self.addEventListener('fetch', e=>{
    
    const respuesta = caches.match(e.request);
    
    
    e.respondWith(respuesta);
});