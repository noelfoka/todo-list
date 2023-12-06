import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
  return (
    // <div className="wrapper"> remove the div
    <div className="todos">
      <Header>
        <h1>todos</h1>
        <p>This is the list for all Items todo</p>
      </Header>
      <TodosLogic />
    </div>
    // </div>
  );
};
export default Home;