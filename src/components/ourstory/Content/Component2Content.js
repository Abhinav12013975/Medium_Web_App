
import React from "react";
import "./Component2Content.css";
export default function Component2Content() {
  const details = [
    {
      id: 1,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2LgWkKeKk7r54xgeKZFt8XysLjZ3ZTBeAg&usqp=CAU",
      name: "Erica Dhawan",
      url:"https://ericadhawan.medium.com/"
    },
     {
         id:2,
         image:"https://psychology.osu.edu/sites/default/files/2021-07/devon_price.jpeg",
         name:"Devon price",
         url:"https://devonprice.medium.com/"
         
     },
     {
         id:3,
         image:"https://www.stern.nyu.edu/faculty/static/photos/sgallowa.jpg",
         name:"Scott Galloway",
         url:"https://onezero.medium.com/"
     },
         {
            id:4,
            image:"https://cdn-static-1.medium.com/sites/medium.com/about/images/KakiOkumura_1KakiOkumura.png",
            name:"Kokumara",
            url:"https://kokumura.medium.com/"
        },
       {
            id:5,
            image:"https://www.stern.nyu.edu/faculty/static/photos/sgallowa.jpg",
            name:"Scott Galloway",
            url:"https://medium.com/@profgalloway"
        },
         {
             id:6,
             image:"https://www.stern.nyu.edu/faculty/static/photos/sgallowa.jpg",
             name:"Scott Galloway",
             url:"https://medium.com/@profgalloway"
         },

         {
            id: 1,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2LgWkKeKk7r54xgeKZFt8XysLjZ3ZTBeAg&usqp=CAU",
            name: "Erica Dhawan",
            url:"https://ericadhawan.medium.com/"
          },
           {
               id:2,
               image:"https://psychology.osu.edu/sites/default/files/2021-07/devon_price.jpeg",
               name:"Devon price",
               url:"https://devonprice.medium.com/"
               
           },
           {
               id:3,
               image:"https://www.stern.nyu.edu/faculty/static/photos/sgallowa.jpg",
               name:"Scott Galloway",
               url:"https://onezero.medium.com/"
           },
               {
                  id:4,
                  image:"https://cdn-static-1.medium.com/sites/medium.com/about/images/KakiOkumura_1KakiOkumura.png",
                  name:"Kokumara",
                  url:"https://kokumura.medium.com/"
              },
             {
                  id:5,
                  image:"https://www.stern.nyu.edu/faculty/static/photos/sgallowa.jpg",
                  name:"Scott Galloway",
                  url:"https://medium.com/@profgalloway"
              },
               {
                   id:6,
                   image:"https://www.stern.nyu.edu/faculty/static/photos/sgallowa.jpg",
                   name:"Scott Galloway",
                   url:"https://medium.com/@profgalloway"
               },
  ];
  return (
    <div className="Component2Content">
      <div className="content_ctn">
        <h2>A living network of curious minds.</h2>
      </div>

      <div className="photo_png">
         {
            
             details.map((value)=>(
               
                <a href={value.url} target="_blank" rel="noreferrer">
                   <div className="inside_map">
                  
                    <div className="auth_image"><img src={value.image} alt="" className="auth_image_img" /></div>
                      <div className="auth_name"><h4>{value.name}</h4></div>
                  
                   </div>
                   </a>
                   
             ))
             
         }
         </div>
    </div>
  );
}
