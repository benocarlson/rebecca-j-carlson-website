<template>
  <div class="page">
    <div id="home">
      <div id="header">
        <h2>Author</h2>
        <h1>Rebecca J. Carlson</h1>
      </div>
      <div id="book-ad">
        <div id="amazon-nav">
          <div id="cover-link">
            <a href="https://www.amazon.com/Barley-Rye-Adventure-Castle-Season/dp/1947655485/">
              <img src="/images/BarleyAndRyeCoverMed.webp"/> 
              <!-- FIXME this image needs to be more broadly compatible -->
            </a>
          </div>
          <div id="buy-now">
            <h3>Now Available!</h3>
            <p>Get it on Amazon</p>
            <a href="https://www.amazon.com/Barley-Rye-Adventure-Castle-Season/dp/1947655485/">
              <i>BUY NOW</i>
            </a>
          </div>
        </div>
        <div id="ad-quote">
          <p>
            What a fun adventure! My 15 year old enjoyed it almost as much as my kinder age relatives.
            <br/>
            The chapters are short enough for a new reader to chapter books to feel successful and the 
            content is fun enough to appeal to all ages.
            <br/>
            Warning: if you don’t have small children to read this book to at bedtime, 
            it may induce the desire to share it with all of the youngsters in your life.
          </p>
          <p class="attribution">- Amy, Colorado USA</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

#header {
  padding: 200px 0;
}

#amazon-nav {
  margin-top: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 80px;
  background-color: #333;
}

#cover-link {
  position: relative;
}

#cover-link a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#cover-link img{
  width: 400px;
}

#buy-now p {
  color: white;
}

#buy-now h3 {
  color: beige;
}

#buy-now a, #buy-now a:visited {
  color: white;
  text-decoration: none;
  border: 2px solid white;
  padding: 3px;
  transition: .5s;
}

#buy-now a:hover, #buy-now a:visited:hover {
  background: #467;
  border: 2px solid #467;
}

#ad-quote {
  width: 33%;
  margin: 20px 100px 20px auto;
  padding: 50px;
  background: rgb(245, 245, 220, .3);
  color: black;
  font-style: italic;
}

#ad-quote p {
  text-align: left;
}

#ad-quote .attribution {
  text-align: right;
}

</style>