let bloglarim = JSON.parse(localStorage.getItem("Bloglarım")) || [];
function saveBloglarim(){
    localStorage.setItem("Bloglarım", JSON.stringify(bloglarim));
}
function blogOlustur(){
    const isim = prompt("İsmini gir:");
    const soyisim = prompt("Soyismini gir:");
    const blogBaslik = prompt("Blog başlığı gir:");
    const blogYazi = prompt("Blog yazısı gir:");
    if (!isim || !soyisim || !blogBaslik || !blogYazi) {
        alert("Tüm bilgileri eksiksiz gir.");
        return nextAction();
    }
    bloglarim.push({isim, soyisim, blogBaslik, blogYazi});
    saveBloglarim();
    alert("Blog kaydedildi.");
    return nextAction();
}
function bloglariListele(){
    if(bloglarim.length === 0){
        alert("Henüz bir blog eklemedin.");
    }
    else{
        const basliklar = bloglarim.map((blog, i) => `${i + 1}. ${blog.blogBaslik}`).join("\n");
        const secim = prompt(`Kaydedilen Bloglar:\n\n${basliklar}\n\nBlog seç:`);
        const secilenBlog = bloglarim[parseInt(secim) - 1];
        if(secilenBlog){
            alert(`Seçilen Blog:\n\nBaşlık: ${secilenBlog.blogBaslik}\nYazar: ${secilenBlog.isim} ${secilenBlog.soyisim}\n\n${secilenBlog.blogYazi}`);
        }
        else{
            alert("Geçersiz seçim yaptın.");
        }
    }
    return nextAction();
}
function nextAction(){
    const value = prompt("Başka bir işlem yapmak ister misin? (e/h)").toLowerCase();
    if(value === "e"){
        return mainMenu();
    }
    else if(value === "h"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptın.");
        return nextAction();
    }
}
function mainMenu(){
    const value = prompt(`Bir işlem seç:\n1- Blogları listele\n2- Yeni blog oluştur\n3- Çıkış yap`);
    if(value === "1"){
        return bloglariListele();
    }
    else if (value === "2"){
        return blogOlustur();
    }
    else if (value === "3"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptın.");
        return mainMenu();
    }
}
mainMenu();