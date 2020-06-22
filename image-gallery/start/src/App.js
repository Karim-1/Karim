import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const getPhotos = useCallback(() => {
    let apiUrl = `https://api.unsplash.com/photos?`;
    if (query)
      apiUrl = `https://api.unsplash.com/search/photos?&query=${query}`;

    apiUrl += `&client_id=H_onKLNMLb3mOhcswUPTJ0GubzvCGgrUrm0NeZFldRI&page=${page}`;

    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const listOfImages = data.results ?? data;

        if (page === 1) setImages(listOfImages);
        else setImages((images) => [...images, ...listOfImages]);
      });
  }, [page, query]);

  useEffect(() => {
    getPhotos();
  }, [page, getPhotos]);

  function searchPhotos(e) {
    e.preventDefault();
    setPage(1);
    getPhotos();

    fetch(
      `https://api.unsplash.com/search/photos?client_id=H_onKLNMLb3mOhcswUPTJ0GubzvCGgrUrm0NeZFldRI&page=${page}&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages((images) => [...images, ...data.results]);
      })
      .catch(alert);
  }

  return (
    <div className="app">
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          setPage((page) => page + 1);
          getPhotos();
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <h1>Unsplash Image Gallery!</h1>

        <form
          onSubmit={searchPhotos}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        >
          <input type="text" placeholder="Search Unsplash..." />
          <button>Search</button>
        </form>

        <div className="image-grid">
          {images.map((image, index) => (
            <a className="image" href={image.links.html} key={index}>
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
