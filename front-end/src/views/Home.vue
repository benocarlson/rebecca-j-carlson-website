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
  margin: 200px 0;
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
</style>