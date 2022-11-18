  document.querySelector('#app').innerHTML = `<div class="main-content">
    <div class="container-fluid">
      <div class="row justify-content-center">
            <div class="col-12">

                <!-- Card -->
                <div class="card" data-list='{"valueNames": ["item-name", "item-title", "item-email", "item-score", "item-company"], "page": 5, "pagination": {"paginationClass": "list-pagination"}}' id="contactList">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">

                                <!-- Form -->
                                <form>
                                <div class="input-group input-group-flush input-group-merge input-group-reverse">
                                    <input class="form-control list-search" type="search" placeholder="Search">
                                    <span class="input-group-text">
                                    <i class="fe fe-search"></i>
                                    </span>
                                </div>
                                </form>

                            </div>
                        </div>
                    </div>

                        
                    <div class="table-responsive">
                        <table class="table table-sm table-hover table-nowrap card-table">
                            <thead>
                                <tr>
                                    <th>

                                        <!-- Checkbox -->
                                        <div class="form-check mb-n2">
                                            <input class="form-check-input list-checkbox-all" id="listCheckboxAll" type="checkbox">
                                            <label class="form-check-label" for="listCheckboxAll"></label>
                                        </div>

                                    </th>
                                    <th>
                                        <a class="sort text-muted" data-sort="item-name" href="#">Name</a>
                                    </th>
                                    <th>
                                        <a class="sort text-muted" data-sort="item-title" href="#">Job title</a>
                                    </th>
                                    <th>
                                        <a class="sort text-muted" data-sort="item-score" href="#">Score</a>
                                    </th>
                                    <th colspan="2">
                                        <a class="sort text-muted" data-sort="item-company" href="#">Company</a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="list fs-base">
                                <tr>
                                    <td>

                                        <!-- Checkbox -->
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxOne" value='10' data-list-id='1' data-item-id='2' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxOne"></label>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="item-name">Dianna Smiley</span>
                                    </td>
                                    <td>
                                        <span class="item-title">Designer</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-danger-soft">1/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Twitter</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#!" class="dropdown-item">Action</a>
                                                <a href="#!" class="dropdown-item">Another action</a>
                                                <a href="#!" class="dropdown-item">Something else here</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Checkbox -->
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxTwo" data-list-id='1' data-item-id='3' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxTwo"></label>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="item-name text-reset">Ab Hadley</span>
                                    </td>
                                    <td class="">
                                        <span class="item-title">Developer</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-success-soft">8/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Google</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxTen" data-list-id='1' data-item-id='4' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxTen"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name">Glen Rouse</span>
                                    </td>
                                    <td class="">
                                        <span class="item-title">Owner</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-warning-soft">6/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Twitch</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Checkbox -->
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxOne" data-list-id='1' data-item-id='5' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxOne"></label>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="item-name">Dianna Smiley</span>
                                    </td>
                                    <td>
                                        <span class="item-title">Designer</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-danger-soft">1/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Twitter</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#!" class="dropdown-item">Action</a>
                                                <a href="#!" class="dropdown-item">Another action</a>
                                                <a href="#!" class="dropdown-item">Something else here</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Checkbox -->
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxTwo" data-list-id='1' data-item-id='6' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxTwo"></label>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="item-name text-reset">Ab Hadley</span>
                                    </td>
                                    <td class="">
                                        <span class="item-title">Developer</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-success-soft">8/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Google</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxTen" data-list-id='1' data-item-id='7' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxTen"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name">Glen Rouse</span>
                                    </td>
                                    <td class="">
                                        <span class="item-title">Owner</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-warning-soft">6/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Twitch</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Checkbox -->
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxOne" data-list-id='1' data-item-id='8' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxOne"></label>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="item-name">Dianna Smiley</span>
                                    </td>
                                    <td>
                                        <span class="item-title">Designer</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-danger-soft">1/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Twitter</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#!" class="dropdown-item">Action</a>
                                                <a href="#!" class="dropdown-item">Another action</a>
                                                <a href="#!" class="dropdown-item">Something else here</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Checkbox -->
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxTwo" data-list-id='1' data-item-id='9' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxTwo"></label>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="item-name text-reset">Ab Hadley</span>
                                    </td>
                                    <td class="">
                                        <span class="item-title">Developer</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-success-soft">8/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Google</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxTen" data-list-id='1' data-item-id='10' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxTen"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name">Glen Rouse</span>
                                    </td>
                                    <td class="">
                                        <span class="item-title">Owner</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-warning-soft">6/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Twitch</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Checkbox -->
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxOne" data-list-id='1' data-item-id='11' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxOne"></label>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="item-name">Dianna Smiley</span>
                                    </td>
                                    <td>
                                        <span class="item-title">Designer</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-danger-soft">1/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Twitter</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#!" class="dropdown-item">Action</a>
                                                <a href="#!" class="dropdown-item">Another action</a>
                                                <a href="#!" class="dropdown-item">Something else here</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                        <!-- Checkbox -->
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxTwo" data-list-id='1' data-item-id='12' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxTwo"></label>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="item-name text-reset">Ab Hadley</span>
                                    </td>
                                    <td class="">
                                        <span class="item-title">Developer</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-success-soft">8/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Google</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input list-checkbox" id="listCheckboxTen" data-list-id='1' data-item-id='13' type="checkbox">
                                            <label class="form-check-label" for="listCheckboxTen"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="item-name">Glen Rouse</span>
                                    </td>
                                    <td class="">
                                        <span class="item-title">Owner</span>
                                    </td>
                                    <td>
                                        <span class="item-score badge bg-warning-soft">6/10</span>
                                    </td>
                                    <td>
                                        <a class="item-company text-reset" href="team-overview.html">Twitch</a>
                                    </td>
                                    <td class="text-end">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                            <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="card-footer d-flex justify-content-between">

                        <!-- Pagination (prev) -->
                        <ul class="list-pagination-prev pagination pagination-tabs card-pagination">
                            <li class="page-item">
                                <a class="page-link ps-0 pe-4 border-end" href="#">
                                    <i class="fe fe-arrow-left me-1"></i> Prev
                                </a>
                            </li>
                        </ul>

                        <!-- Pagination -->
                        <ul class="list-pagination pagination pagination-tabs card-pagination"></ul>

                        <!-- Pagination (next) -->
                        <ul class="list-pagination-next pagination pagination-tabs card-pagination">
                            <li class="page-item">
                                <a class="page-link ps-4 pe-0 border-start" href="#">
                                    Next <i class="fe fe-arrow-right ms-1"></i>
                                </a>
                            </li>
                        </ul>

                        <!-- Alert -->
                        <div class="list-alert alert alert-dark alert-dismissible border fade" role="alert">

                            <!-- Content -->
                            <div class="row align-items-center">
                                <div class="col">

                                    <!-- Checkbox -->
                                    <div class="form-check">
                                    <input class="form-check-input" id="listAlertCheckbox" type="checkbox" checked="" disabled="">
                                    <label class="form-check-label text-white" for="listAlertCheckbox">
                                        <span class="list-alert-count">24</span> deal(s)
                                    </label>
                                    </div>

                                </div>
                                <div class="col-auto me-n3">

                                    <!-- Button -->
                                    <button class="btn btn-sm btn-white-20">
                                    Edit
                                    </button>

                                    <!-- Button -->
                                    <button class="btn btn-sm btn-white-20">
                                        Delete
                                    </button>

                                </div>
                            </div> <!-- / .row -->

                            <!-- Close -->
                            <button type="button" class="list-alert-close btn-close" aria-label="Close"></button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</div> `
