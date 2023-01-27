import {Route, Routes} from "react-router-dom";
import {HomePage, AlbumsPage, TodosPage, CommentsPage, NotFoundPage, PostsPage} from "./pages"
import {Header} from "./components";

const App = () => {
  return (
      <div>
          <Header/>
    <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'todos'} element={<TodosPage/>}/>
        <Route path={'albums'} element={<AlbumsPage/>}/>
        <Route path={'comments'} element={<CommentsPage/>}>
            <Route path={':id'} element={<PostsPage/>}/>
    </Route>
        <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
      </div>
  );
}

export{App};
