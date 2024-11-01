
const express = require('express');
const app = express();
app.use(express.json()); 


const blogController = {
  createBlog: (req, res) => {
    res.status(201).json({ message: 'Blog created successfully' });
  },
  readBlog: (req, res) => {
    res.status(200).json({ message: 'Blog read successfully' });
  },
  updateBlog: (req, res) => {
    res.status(200).json({ message: 'Blog update successfully' });
  },
  deleteBlog: (req, res) => {
    res.status(200).json({ message: 'Blog delete successfully' });
  }
};


app.post('/api/blogs/create-blog', blogController.createBlog);
app.get('/api/blogs/read-blog', blogController.readBlog);
app.put('/api/blogs/update-blog', blogController.updateBlog);
app.delete('/api/blogs/delete-blog', blogController.deleteBlog);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
