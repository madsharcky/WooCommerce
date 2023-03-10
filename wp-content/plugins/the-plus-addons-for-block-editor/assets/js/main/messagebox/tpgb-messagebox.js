let messAll = document.querySelectorAll('.tpgb-messagebox');
messAll.forEach((ms)=>{
    let disBtn = ms.querySelector('.msg-dismiss-content');
    disBtn.addEventListener('click', ()=>{
        slideUpP(ms, 500)
    })
});
