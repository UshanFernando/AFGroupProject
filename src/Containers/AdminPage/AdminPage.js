import React, { Component } from "react";
import CategoryList from "../../Layouts/CategoriesList/CategoriesList";
import StoreManagersList from "../../Layouts/StoreMangersList/StoreManagersList";
import RegisterNewStoreManager from "../../Layouts/RegisterNewStoreManager/RegisterNewStoreManager";
import Banner from "../../Components/Banner/Banner";
import "./AdminPage.css";
import SiteOverviewAdmin from "../../Components/SiteOverviewAdmin/SiteOverviewAdmin";
class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
    this.manager = React.createRef();
    this.loadCategories = this.loadCategories.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.loadStats = this.loadStats.bind(this);
    this.state = {
      categoryName: "",
      categories: null,
      stats: null,
      cUpdateEn: false,
      cUpdateId: null,
    };
  }

  async componentDidMount() {
    this.loadCategories();
    this.loadStats();
  }

  render() {
    return (
      <div>
        <Banner
          name="Administrator"
          description="Manage Categories and Store Managers"
          admin={true}
          scrollAdminCategories={this.scrollToCategories}
          scrollAdminManagers={this.scrollToManagers}
        />
        <br />
        <div className="container pt-4">
          <SiteOverviewAdmin stats={this.state.stats} />
          <br />
          <h2 ref={this.category} className="pt-4 mt-4">
            Manage Categories
          </h2>

          <div className="row">
            <div className="col-sm ">
              <h4 className="pt-4 ">Product Categories</h4>
              <div className="listScrollable">
                <CategoryList
                  categories={this.state.categories}
                  onDelete={this.deleteCategory}
                  onUpdate={this.handleCategoryUpdate}
                />
              </div>
            </div>
            <div className="col-sm">
              <h4 className="pt-4 ">Add New Categories</h4>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Category Name"
                value={this.state.categoryName}
                onChange={this.categoryNameInputChange}
              />
              <br />
              <button
                onClick={
                  this.state.cUpdateEn ? this.updateCategory : this.addCategory
                }
                className="button"
              >
                {this.state.cUpdateEn ? "Update" : "Add"}
              </button>
            </div>
          </div>
          <br />
          <hr className="mt-4 mb-4" />
          <h2 ref={this.manager} className="pt-4 mt-4">
            Manage Store Managers
          </h2>

          <h4 className="pt-4">Register New Store Managers</h4>
          <RegisterNewStoreManager />

          <h4 className="pt-4">Registered Store Managers</h4>
          <div className="listScrollable">
            <StoreManagersList />
          </div>
        </div>
      </div>
    );
  }

  handleCategoryUpdate = (category) => {
    this.setState({
      cUpdateEn: true,
      cUpdateId: category._id,
      categoryName: category.name,
    });
  };

  scrollToCategories = () =>
    window.scrollTo(0, this.category.current.offsetTop - 100);
  scrollToManagers = () =>
    window.scrollTo(0, this.manager.current.offsetTop - 100);

  async addCategory() {
    if (this.state.categoryName.trim() !== 0) {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: this.state.categoryName }),
        };
        await fetch("http://localhost:5000/admin/category", requestOptions);
        this.loadCategories();
        this.setState({
          categoryName: "",
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  async loadCategories() {
    try {
      const res = await fetch("http://localhost:5000/admin/category");
      const data = await res.json();
      //updateing state with lastest data
      this.setState({
        categories: data,
      });
    } catch (e) {
      //if failed to communicate with api this code block will run
      console.log(e);
    }
  }

  async deleteCategory(id) {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };
      await fetch("http://localhost:5000/admin/category", requestOptions);
      this.loadCategories();
    } catch (e) {
      console.log(e);
    }
  }

  async updateCategory() {
   
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: this.state.cUpdateId,
          name: this.state.categoryName,
        }),
      };
      await fetch("http://localhost:5000/admin/category", requestOptions);
      this.loadCategories();
      this.setState({
        categoryName: "",
        cUpdateEn: false,
        cUpdateId: null,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async loadStats() {
    try {
      const res = await fetch("http://localhost:5000/admin/stats");
      const data = await res.json();
      //updateing state with lastest data
      this.setState({
        stats: data,
      });
    } catch (e) {
      //if failed to communicate with api this code block will run
      console.log(e);
    }
  }

  categoryNameInputChange = (e) => {
    this.setState({ categoryName: e.target.value });
  };
}

export default AdminPage;
