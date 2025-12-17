---
layout: book-shelf
title: Know me more!!
permalink: /Know_me/
nav: false
---

<p>Apart from academics, I love sports. I follow FC Barcelona in LaLiga and the Mumbai Indians in the IPL. Internationally, I enjoy watching the Spain national football team and have been a follower of Indian cricket since I was 8 years old.</p>

<p>Besides sports, I watch movies - if you haven't noticed, I am a fan of Star Wars. Some of my favorite actors and directors are Kamal Haasan, Tom Hanks, and Paul Thomas Anderson. I also listen to a lot of music by A.R. Rahman. You can follow me on <a href="https://letterboxd.com/Amrithya/">Letterboxd</a>.</p>

<p>I love to travel. Attached some pictures below (nothing impressive). I have lived in three cities in India - Dharmapuri, Chennai, and Bengaluru; two in France - Saint-Étienne and Marseille; and one in Germany - Freiburg. I have also visited several other cities.</p>

<p>Say HI if you get a chance!</p>


<div class="carousel-container">
  <button class="carousel-btn prev" onclick="moveSlide(-1)">&#10094;</button>

  <figure class="carousel-slide">
    <img src="/assets/img/marseille2.jpg">
    <figcaption>Marseille</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/freiburg1.jpg">
    <figcaption>Freiburg</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/colmar1.jpg">
    <figcaption>Colmar</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/freiburg2.jpg">
    <figcaption>Freiburg — Old Town</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/ind1.jpg">
    <figcaption>India</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/bang1.jpg">
    <figcaption>Bangalore</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/chennai1.jpg">
    <figcaption>Chennai</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/se2.jpg">
    <figcaption>Saint-Étienne</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/marseille3.jpg">
    <figcaption>Marseille Coast</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/se1.jpg">
    <figcaption>Saint-Étienne</figcaption>
  </figure>

  <figure class="carousel-slide">
    <img src="/assets/img/marseille1.jpg">
    <figcaption>Marseille Harbor</figcaption>
  </figure>

  <button class="carousel-btn next" onclick="moveSlide(1)">&#10095;</button>
</div>

<style>
.carousel-container {
  position: relative;
  max-width: 700px;
  margin: auto;
  text-align: center;
}

.carousel-slide {
  display: none;
}

.carousel-slide img {
  width: 100%;
  height: 420px;          /* 🔹 force same size */
  object-fit: contain;     /* 🔹 crop without distortion */
  border-radius: 8px;
}

figcaption {
  margin-top: 0.5rem;
  font-style: italic;
  font-size: 0.9rem;
}

.carousel-btn {
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 12px;
  font-size: 22px;
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  border-radius: 50%;
  user-select: none;
}

.prev { left: 10px; }
.next { right: 10px; }
</style>

<script>
let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
</script>
