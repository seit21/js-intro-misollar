//Variables 3 xil bo'ladi:
     // 1-const;
     // 2-let;
     // 3-var;
  // Uchalasini ham e'lon qilish uchun Umumiy struktura:
    // Masala: variableName = variableValue;
        // const name='najot';
        // let yunalish="frontend";
        // var oy="uch";


// Data types (Ma'lumot turlari)


// Values
    // 1- numbers
         var age=21;
         var price=1000;
         var phone=998931111111;
         let a=34;
         let b=32;
         let c=2;
         const x=5;
         const y=7;
    // 2-string   => ('' yoki "")
         const name='Seit';
         const surname="Eraliyev";
         let country="Uzbekistan";
         let city='Tashkent';
    // 3-boolean
         let student=true;
         let isMarried=false;
    
    // 4-null
         let box = null; // quti bo'sh degani. ya'ni ichida qiymati yo'q degani     
    
    // 5-undefined
         let quti; // ya'ni   qutining o'zi ham yo'q degani   
    // 6-object
         var smartphone  ={
            nomi: 'iphone 14',
            yili:2022,
            chipi:'apple bionic 15',
            display:6.7,
            battery:4000
         }  
    // 7- array
          var  maktab=['uzbekistan','toshkent',256,+99893113734478]      

// Operatrions = Amallar 
    //qo'shish
           var res1=a+b;
           var res2=age+phone;
           var res3=y+price;  
           
    // ayirish
           let res4=phone-a;
           let res5=age-x;
           let res6=price-c;
    
    //ko'paytirish
           var res7=x*y;
           var res8=c*phone;
           var res9=age*b;
           var res10=a*price;
           var res11=a*y;
     // bo'lish
           let res12=a/c;
           let res13=b/c;
           let res14=age/y;
           let res15=phone/x;
           let res16=a/age;
           let res17=price/y;
     // qoldiqli bo'lish
           var res18= a%c;
           var res19=x%y;
           var res20=c%phone;
           var res21=age%b;
           var res21=a%price;
           var res22=a%y;   
     // sonning darajasi
           const res23=x**y;       
           const res24=c**y;       
           const res25=y**c;       
           const res26=age**c;       

// mantiqiy Amallar
         let res27= x>y && age<a;
         let res28= age>a || phone>y;
         let res29= age==age;
         let res30= a!=b;


         /// Natijani korish   qaysi tipga tegishliligi bilan
         console.log(res1);
         console.log(typeof(res1));
         console.log(res2);
         console.log(typeof(res2));
         console.log(res3);
         console.log(typeof(res3));
         console.log(res4);
         console.log(typeof(res4));
         console.log(res5);
         console.log(typeof(res5));
         console.log(res6);
         console.log(typeof(res6));
         console.log(res7);
         console.log(typeof(res7));
         console.log(res8);
         console.log(typeof(res8));
         console.log(res9);
         console.log(typeof(res9));
         console.log(res10);
         console.log(typeof(res10));
         console.log(res11);
         console.log(typeof(res11));
         console.log(res12);
         console.log(typeof(res12));
         console.log(res13);
         console.log(typeof(res13));
         console.log(res14);
         console.log(typeof(res14));
         console.log(res15);
         console.log(typeof(res15));
         console.log(res16);
         console.log(typeof(res16));
         console.log(res17);
         console.log(typeof(res17));
         console.log(res18);
         console.log(typeof(res18));
         console.log(res19);
         console.log(typeof(res19));
         console.log(res20);
         console.log(typeof(res20));
         console.log(res21);
         console.log(typeof(res21));
         console.log(res22);
         console.log(typeof(res22));
         console.log(res23);
         console.log(typeof(res23));
         console.log(res24);
         console.log(typeof(res24));
         console.log(res25);
         console.log(typeof(res25));
         console.log(res26);
         console.log(typeof(res26));
         console.log(res27);
         console.log(typeof(res27));
         console.log(res28);
         console.log(typeof(res28));
         console.log(res29);
         console.log(typeof(res29));
         console.log(res30);
         console.log(typeof(res30));

         console.log(age);
         console.log(typeof(age));
         console.log(price);
         console.log(typeof(price));
         console.log(phone);
         console.log(typeof(phone));
         console.log(a);
         console.log(typeof(a));
         console.log(b);
         console.log(typeof(b));
         console.log(c);
         console.log(typeof(c));
         console.log(x);
         console.log(typeof(x));
         console.log(y);
         console.log(typeof(y));
         console.log(name);
         console.log(typeof(name));
         console.log(surname);
         console.log(typeof(surname));
         console.log(country);
         console.log(typeof(country));
         console.log(city);
         console.log(typeof(city));
         console.log(student);
         console.log(typeof(student));
         console.log(isMarried);
         console.log(typeof(isMarried));
         console.log(box);
         console.log(typeof(box));
         console.log(quti);
         console.log(typeof(quti));
         console.log(smartphone);
         console.log(typeof(smartphone));
         console.log(maktab);
         console.log(typeof(maktab));


         console.log(maktab.length);
         
         console.log(smartphone.length);
         console.log(maktab[0]);
         console.log(maktab[1]);
         console.log(maktab[2]);