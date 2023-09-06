import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderRatingList = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {activeRatingId, changeActiveRating} = props
      const onClickRating = () => changeActiveRating(eachRating.ratingId)

      const isActive = eachRating.ratingId === activeRatingId
      const ratingClassName = isActive
        ? 'rating-name active-rating'
        : 'rating-name'

      return (
        <li
          className="rating-item"
          key={eachRating.ratingId}
          onClick={onClickRating}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>&up</p>
        </li>
      )
    })
  }

  const renderProductRating = () => (
    <>
      <h1 className="filters-group-heading">Rating</h1>
      <ul className="rating-list">{renderRatingList()}</ul>
    </>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {activeCategoryId, changeActiveCategory} = props
      const onClickCategoryItem = () =>
        changeActiveCategory(eachCategory.categoryId)
      const isActive = eachCategory.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name active-category'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={eachCategory.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderProductCategory = () => (
    <>
      <h1 className="filters-group-heading">Category</h1>
      <ul className="category-container">{renderCategoryList()}</ul>
    </>
  )

  const {onClickClearFilter} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderProductRating()}
      <button
        type="button"
        className="clear-filter-btn"
        onClick={onClickClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
