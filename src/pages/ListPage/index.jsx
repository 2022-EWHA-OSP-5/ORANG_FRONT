import { Layout } from './style';

import TopNavigateBar from '../../components/Navigate/TopNavigateBar';
import List from '../../components/List/List';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import SelectBox from '../../components/SelectBox/SelectBox';
import { restaurants, options } from './data';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ListPage() {
  const [filter, setFilter] = useState([
    { id: 1, value: '한식', selected: false },
    { id: 2, value: '아시아음식', selected: false },
    { id: 3, value: '일식', selected: true },
  ]);

  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  const SelectFilter = id => {
    setFilter(
      filter.map(f =>
        f.id === id ? { ...f, selected: true } : { ...f, selected: false },
      ),
    );
  };

  useEffect(() => {
    console.log(filter);

    filter.map(f => {
      if (f.selected === true) {
        axios
          .get(`http://127.0.0.1:5000/restaurants?category=${f.value}`)
          .then(res => setRestaurants(res.data.data))
          .catch(err => console.log(err));
      }
    });
  }, [filter]);

  return (
    <Layout.Display>
      <TopNavigateBar />

      <Layout.SelectBox>
        {filter.map(f => {
          return <SelectBox select={f} onClick={() => SelectFilter(f.id)} />;
        })}
      </Layout.SelectBox>

      <Layout.ListBox>
        {restaurants.map(res => {
          return (
            <List
              restaurant={res}
              onClick={() => navigate(`/detail/${res.id}`)}
            />
          );
        })}
      </Layout.ListBox>

      <BottomNavigateBar />
    </Layout.Display>
  );
}
