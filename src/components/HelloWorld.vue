<template>
      <div class="page">
            <nav class="nav">
                  <ul class="nav-list">
                       <li> <a href="/start"><i class="fa-solid fa-chevron-left"></i></a>  </li>
                      <li class="nav-item">Халык Казына</li>
                      <li class="nav-item">Настройки</li> 
                 </ul>
            </nav>

            <div class="term">
                      <div>
                              <p class="owner">Владелец</p>
                              <input type="text" v-model="iin">
                      </div>
                      <div>
                            <p class="owner">Срок действия, лет</p>
                            <p>2 года</p>
                      </div>
                      <div class="dot"><i class="fa-solid fa-left-right"></i></div>            
                 </div>

                 <div>
                          <p class="owner">Страховая премия для оплаты</p>
                 </div>
                 <div class="error" v-if="hasError">
                    Вы есть в списке
                 </div>
                <button class="btn" @click="getBlack">Продолжить оформление</button>     
      </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',

  data() {
    return {
      iin: 0,
      hasError: false,
    }
  },

  methods: {
   async getBlack() {

      try {
          const black =  await  axios.get('https://afmrk.gov.kz/blacklist/export/active/xml')

          console.log(black)

          if (black.data.includes(this.iin)) {
             this.hasError = true
          }

         
    
      }  catch (error) {
        console.error(error)
      }
         
  }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.error {
   margin-top: 20px;
   border: solid 1px red;
   padding: 30px;
   color: red;
   font-weight: bold;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}



.page {
  margin: auto;
  max-width: 1300px;
  max-height: 100%;
}

.nav-list {
  display: flex;
  justify-content: space-between;
  width: 1000vh;
}
.nav-item {
  font-weight: bold;
}

.term {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
}

.dot {
  padding: 4px;
  color: white;
width: 24px;
height: 24px;
border-radius: 50%;
background-color: #2aa65c;
background-repeat: no-repeat;
background-position: 50%;
}

.owner {
  color: gray
}

.btn {
  width: 100%;
  height: 48px;
  background-color: rgb(107, 223, 153);
  box-shadow: 0 4px 12px rgba(42,166,92,.4);
  border-radius: 12px;
border: none;
color: #fff;
margin-top: 40%;
}
</style>
