import React from "react";

export default function SideBar({ setFilter }) {
  const handleChange = (event) => {
    let checked = event.currentTarget.checked;
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    if (checked) {
      setFilter((prev) => ({
        ...prev,
        [name]: [...prev[name], value],
      }));
    }
    if (!checked) {
      setFilter((prev) => ({
        ...prev,
        [name]: [...prev[name].filter((arr) => arr !== value)],
      }));
    }
  };

  return (
    <div className="sidenav">
      <ul className="main-fil">
        <li>
          Filter By Brand
          <ul className="main-fil">
            <li>
              <input
                type="checkbox"
                name="brand"
                value="nike"
                onChange={handleChange}
              />{" "}
              Nike
            </li>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="adidas"
                onChange={handleChange}
              />{" "}
              Adidas
            </li>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="reebok"
                onChange={handleChange}
              />{" "}
              Reebok
            </li>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="woodlands"
                onChange={handleChange}
              />{" "}
              Woodlands
            </li>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="puma"
                onChange={handleChange}
              />{" "}
              PUma
            </li>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="seven"
                onChange={handleChange}
              />{" "}
              Seven
            </li>
          </ul>
        </li>
      </ul>
      <ul className="main-fil">
        <li>
          Filter By Category
          <ul className="main-fil">
            <li>
              <input
                type="checkbox"
                name="category"
                value="tshirts"
                onChange={handleChange}
              />{" "}
              Tshirts
            </li>
            <li>
              <input
                type="checkbox"
                name="category"
                value="hoodies"
                onChange={handleChange}
              />{" "}
              Hoodies
            </li>
            <li>
              <input
                type="checkbox"
                name="category"
                value="shirts"
                onChange={handleChange}
              />{" "}
              Shirts
            </li>
            <li>
              <input
                type="checkbox"
                name="category"
                value="pants"
                onChange={handleChange}
              />{" "}
              Pants
            </li>
            <li>
              <input
                type="checkbox"
                name="category"
                value="sweatpants"
                onChange={handleChange}
              />{" "}
              Sweatpants
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
