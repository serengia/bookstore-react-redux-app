import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book";
import { getBooks } from "../redux/books/booksSlice";
import { categoriesActions } from "../redux/categories/categoriesSlice";
import "./CategoriesPage.scss";

function CategoriesPage() {
  let { books } = useSelector((state) => state.books);
  const { categories } = useSelector((state) => state.books);
  const { activeCategory } = useSelector((state) => state.categories);

  if (activeCategory !== "All categories") {
    books = books.filter((book) => book.category === activeCategory);
  }

  const dispatch = useDispatch();

  const changeCategoryHandler = (e) => {
    const activeButton = e.target;
    const category = activeButton.textContent;
    dispatch(categoriesActions.changeActiveCategory(category));
    const categoryButtons = activeButton
      .closest(".header-buttons")
      .querySelectorAll("button");

    // Remove active class on all buttons
    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class on active btn
    activeButton.classList.add("active");
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      <div className="categories-wrapper row">
        <div className="header">
          <div className="header-buttons">
            <button
              type="button"
              className="active"
              onClick={changeCategoryHandler}
            >
              All categories
            </button>
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={changeCategoryHandler}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="books">
          {books.map((bk) => (
            <Book
              key={bk.item_id}
              title={bk.title}
              author={bk.author}
              category={bk.category}
              id={bk.item_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
