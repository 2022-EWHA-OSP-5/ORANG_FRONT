import { Layout } from './style';

import TopNavigateBar from '../../components/Navigate/TopNavigateBar';
import List from '../../components/List/List';
import BottomNavigateBar from '../../components/Navigate/BottomNavigateBar';
import SelectBox from '../../components/SelectBox/SelectBox';
import { restaurants, options } from './data';

export default function ListPage() {
  return (
    <Layout.Display>
      <TopNavigateBar />
      <Layout.SelectBox>
        {options.map(opt => {
          return <SelectBox select={opt} />;
        })}
      </Layout.SelectBox>

      <Layout.ListBox>
        {restaurants.map(res => {
          return <List restaurant={res} />;
        })}
      </Layout.ListBox>

      <BottomNavigateBar />
    </Layout.Display>
  );
}
