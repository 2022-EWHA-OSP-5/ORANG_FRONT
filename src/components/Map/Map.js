/*global kakao */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Map() {
  let { id } = useParams();
  const [rest, setRest] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/restaurants/${id}`, {
        headers: {
          Restaurant: id,
        },
      })
      .then(res => {
        console.log(res.data.data);
        setRest(res.data.data[0]);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    mapscript();
  }, [rest.address]);

  const mapscript = () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.55894693550918, 126.94354366138113),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(rest.address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        marker.setMap(map);
        map.setCenter(coords);
      }
    });
  };

  return (
    <div
      id="map"
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
    ></div>
  );
}
