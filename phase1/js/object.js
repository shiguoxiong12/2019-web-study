(function(){
   this.alert=function(){
       var defaultOption={
          delaty:1000
       }
       this.componOption=Object.assign({},defaultOption,{delaty:arguments[0].delaty})
       this.current=0;
       this.shun=true;
       this.is=1
       var bindDom=arguments[0].el;
       this.pic=arguments[0].data;
       this.content=document.querySelector(bindDom)
       this.content.appendChild(this.createDom())
       this.play()

   }
   this.alert.prototype.createDom=function(){
       this.wraper=document.createElement("div");
       this.Dian=document.createElement("div");
       this.Dian.className="Dian"
       this.Dian.style.width=100+'%';
       this.wraper.className="wraper";
       this.wraper.style.width=100 * this.pic.length+"%"
       this.pic.map((i,k)=>{
              var dianWraper=document.createElement("div");
              k==0 ? dianWraper.className="dian active" :   dianWraper.className="dian"
              this.Dian.appendChild(dianWraper)
              this.wraper.appendChild(createChild.call(this,i,k));
       })
       this.content.appendChild(this.Dian);
       return this.wraper;
   }
   function createChild(obj,i){
       var wraperItem=document.createElement("div");
       var img=document.createElement("img");
       img.src=obj.pictureUrl;
       wraperItem.className="wraperItem";
       wraperItem.style.width=(100 / this.pic.length)+'%'
       wraperItem.appendChild(img);
       return wraperItem;
   }
   this.alert.prototype.play=function(){
         this.Dian.querySelectorAll(".dian").forEach((item,k)=>{
             if(item.className=="dian active"){
                 this.current==k;
                 setTimeout(() => {
                    if(this.current>=this.pic.length-1){
                        //this.shun=1;
                        this.is=-1
                    }
                    if(this.current==0){
                        //this.shun=-1;
                        this.is=1
                    }
                    this.current+=this.is;
                    this.wraper.style.transform="translateX(-"+(100 / this.pic.length)*this.current+"%)";
                    this.Dian.querySelectorAll(".dian").forEach((i)=>{i.classList.remove("active");})
                    this.Dian.querySelectorAll(".dian")[this.current].classList.add("active");
                    this.play()
                 }, this.componOption.delaty);
             }
        })
   }
})()