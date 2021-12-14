// Authentication
var currentUser = localStorage.getItem('currentUser');
console.log(currentUser);
if (currentUser != null && currentUser != "") {
  document.querySelectorAll(".login-btn-cover").forEach((element) => {
    element.outerHTML = `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle btn btn-success" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${currentUser}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item sign-out-btn" href="#">Sign Out</a></li>
          </ul>
        </li>
        `;
  });
  document.querySelectorAll(".sign-out-btn").forEach(element => {
    element.onclick = (e) => {
      e.preventDefault();
      localStorage.removeItem('currentUser');
      window.location.href = "index.html";
      window.location;
    }
  })
}

// Call API from json-server
fetch(' http://localhost:3000/list-category')
  .then(
    response => response.json()
  )
  .then(
    json => {
      let listHtmlCategory = '';
      json.forEach(category => {
        listHtmlCategory += `<li><a class="dropdown-item" href="#">${category.name}</a></li>`
      });
      document.getElementById('list-categories').innerHTML = listHtmlCategory;
    }
  );

fetch('http://localhost:3000/top-categories')
  .then(
    response => response.json()
  )
  .then(
    json => {
      let listHtmlTopCategory = "";
      json.forEach(topCategory => {
        listHtmlTopCategory += `<div class="col-md-3 text-center">
          <img src="${topCategory.thumbnail}" class='img-fluid img-thumbnail' />
          <h5>${topCategory.name}</h5>
      </div>`
      });
      document.getElementById('top-category').innerHTML = listHtmlTopCategory;
    }
  );

//Owl Function
var OwlFunction = function () {
  $(".owl-carousel").owlCarousel({
    autoWidth: true,
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
}
//Call Api in RapidAPI
fetch("https://udemy-courses-coupon-code.p.rapidapi.com/api/udemy_course/", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "udemy-courses-coupon-code.p.rapidapi.com",
    "x-rapidapi-key": "9041e6ef80msh4983053313a3931p14def8jsnf768a6b435ce"
  }
})
  .then(response => {
    return response.json()
  })
  .then(listCourse => {
    let listHtmlCourses = "";
    listCourse.forEach(course => {
      console.log(course)
      listHtmlCourses += `
                    <div class="card" style="width: 18rem;">
                        <img src="${course.thumbnail}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${course.title}</h5>
                            <p class="card-text">${course.description}</p>
                            <p> Price : ${course.original_price}</p>
                        </div>
                    </div>`;
      document.getElementById('list-courses').innerHTML = listHtmlCourses;
    })
  })
  .then(OwlFunction)
  .catch(err => {
    console.error(err);
  });


//Config for Owl Library
// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     autoWidth: true,
//     center: true,
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 3
//       },
//       1000: {
//         items: 4
//       }
//     }
//   });
// });