const BASE_URL = 'https://capstone-backend-production-7544.up.railway.app/api'

function getAccessToken() {
  return localStorage.getItem('accessToken')
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken)
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getAccessToken()}`
    }
  })
}

// Profile

async function updateProfile({ name, username, email, phone_number, back_account_number }) {
  const response = await fetchWithToken(`${BASE_URL}/user/update`, {
    method: 'PUT',
    body: JSON.stringify({ name, username, email, phone_number, back_account_number })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function changePassword({ old_password, password, password_confirmation }) {
  const response = await fetchWithToken(`${BASE_URL}/user/change-password`, {
    method: 'PUT',
    body: JSON.stringify({ old_password, password, password_confirmation })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

// User

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function register({ name, username, email, phone_number, back_account_number, password, password_confirmation }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ name, username, email, phone_number, back_account_number, password, password_confirmation })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/user`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getDataAdmin() {
  const response = await fetchWithToken(`${BASE_URL}/admin/data`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function logout() {
  const response = await fetchWithToken(`${BASE_URL}/logout`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  localStorage.removeItem('accessToken')

  return { error: false, data: responseJson.data }
}

// Admin

async function loginAdmin({ email, password }) {
  const response = await fetch(`${BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function registerAdmin({ name, username, email, phone_number, back_account_number, password, password_confirmation }) {
  const response = await fetch(`${BASE_URL}/admin/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ name, username, email, phone_number, back_account_number, password, password_confirmation })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getUserLoggedAdmin() {
  const response = await fetchWithToken(`${BASE_URL}/admin/user`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function logoutAdmin() {
  const response = await fetchWithToken(`${BASE_URL}/admin/logout`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  localStorage.removeItem('accessToken')

  return { error: false, data: responseJson.data }
}

// Category

async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/categories`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getCategoryById(category_id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${category_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function createCategory({ name }) {
  const response = await fetchWithToken(`${BASE_URL}/categories`, {
    method: 'POST',
    body: JSON.stringify({ name })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function updateCategory({ name }, category_id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${category_id}`, {
    method: 'PUT',
    body: JSON.stringify({ name })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function deleteCategory(category_id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${category_id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

// Destination

async function getAllDestinations() {
  const response = await fetch(`${BASE_URL}/destinations`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getDestinationById(destination_id) {
  const response = await fetch(`${BASE_URL}/destinations/${destination_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function createDestination({ name, open_time, close_time, price, rating, location, description }) {
  const response = await fetchWithToken(`${BASE_URL}/destinations`, {
    method: 'POST',
    body: JSON.stringify({ name, open_time, close_time, price, rating, location, description })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function updateDestination({ name, open_time, close_time, price, rating, location, description }, destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/destinations/${destination_id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, open_time, close_time, price, rating, location, description })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function deleteDestination(destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/destinations/${destination_id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

// Destination Gallery

async function getAllDestinationGalleries() {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getDestinationGalleryById(destination_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries/${destination_gallery_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function createDestinationGallery({ image, destination_id }) {
  const response = await fetchWithToken(`${BASE_URL}/galleries/${destination_id}`, {
    method: 'PUT',
    body: JSON.stringify({ image, destination_id })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function deleteDestinationGallery(destination_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries/${destination_gallery_id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

// Article

async function getAllArticles() {
  const response = await fetch(`${BASE_URL}/articles`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getArticleById(article_id) {
  const response = await fetch(`${BASE_URL}/articles/${article_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function createArticle({ title, excerpt, content, category_id }) {
  const response = await fetchWithToken(`${BASE_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify({ title, excerpt, content, category_id })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function updateArticle({ title, excerpt, content, category_id }, article_id) {
  const response = await fetchWithToken(`${BASE_URL}/articles/${article_id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, excerpt, content, category_id })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function deleteArticle(article_id) {
  const response = await fetchWithToken(`${BASE_URL}/articles/${article_id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

// Article Gallery

async function getAllArticleGalleries() {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getArticleGalleryById(article_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries/${article_gallery_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function createArticleGallery({ image, article_id }) {
  const response = await fetchWithToken(`${BASE_URL}/galleries/${article_id}`, {
    method: 'PUT',
    body: JSON.stringify({ image, article_id })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function deleteArticleGallery(article_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries/${article_gallery_id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

// Transaction

async function getAllTransactionUsers() {
  const response = await fetchWithToken(`${BASE_URL}/user/transactions`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getAllTransactions() {
  const response = await fetchWithToken(`${BASE_URL}/transactions`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getTransactionById(transaction_id) {
  const response = await fetchWithToken(`${BASE_URL}/transactions/${transaction_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function createTransaction({ quantity }, destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/orders/${destination_id}`, {
    method: 'PUT',
    body: JSON.stringify({ quantity })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function updateTransaction({ transaction_status }, transaction_id) {
  const response = await fetchWithToken(`${BASE_URL}/transactions/${transaction_id}`, {
    method: 'PUT',
    body: JSON.stringify({ transaction_status })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

// Article Comment

async function getAllArticleComments() {
  const response = await fetchWithToken(`${BASE_URL}/comments`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getArticleCommentById(comment_id) {
  const response = await fetchWithToken(`${BASE_URL}/comments/${comment_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function createArticleComment({ content }, article_id) {
  const response = await fetchWithToken(`${BASE_URL}/comments/${article_id}`, {
    method: 'PUT',
    body: JSON.stringify({ content })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function deleteArticleComment(comment_id) {
  const response = await fetchWithToken(`${BASE_URL}/comments/${comment_id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

// Wishlist

async function createWishlists(destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/wishlists/${destination_id}`, {
    method: 'PUT'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

async function getAllWishlistUsers() {
  const response = await fetchWithToken(`${BASE_URL}/user/wishlists`)
  const responseJson = await response.json()

  return { error: false, data: responseJson.data }
}

export {
  getAccessToken,
  putAccessToken,
  updateProfile,
  changePassword,
  login,
  register,
  getUserLogged,
  getDataAdmin,
  logout,
  loginAdmin,
  registerAdmin,
  getUserLoggedAdmin,
  logoutAdmin,
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
  getAllDestinationGalleries,
  getDestinationGalleryById,
  createDestinationGallery,
  deleteDestinationGallery,
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getAllArticleGalleries,
  getArticleGalleryById,
  createArticleGallery,
  deleteArticleGallery,
  getAllTransactionUsers,
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  getAllArticleComments,
  getArticleCommentById,
  createArticleComment,
  deleteArticleComment,
  createWishlists,
  getAllWishlistUsers
}