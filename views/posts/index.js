<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feed Page</title>
</head>
<body>
<section>
  <%- include('../partials/header') %>
  <br>
  <form>
    <h2>CHECK OUT THE LOCALS BEING SOCIAL!</h2>
    <br>
    <% if (posts.length) { %>
      <% posts.forEach(function(p) { %>
        <br>
        <img src= '<%= p.image %>'/>
        <br>
        <br>
      <%= p.description %>
      <%= p.like ? 'Yes' : 'No'  %>
    <% }) %> 
    <% } else { %>
      <h3>No Posts Yet</h3>
    <% } %>
  </form>
</section>

<section>
    <form action="/comment" method="POST">
      <br>
      <br>
      <label> Like
      <input type="checkbox" name="Like" checked : not checked>
      </label>
      <label> Comment
      <input type="text" name="comment">
      </label>
      <br>
      <br>
      <button type="submit">Comment</button>
    </form>
 </section>

  <%- include('../partials/footer') %>

</body>
</html>

