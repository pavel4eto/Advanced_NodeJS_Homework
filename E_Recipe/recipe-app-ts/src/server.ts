import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/recipe-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));


const recipeSchema = new mongoose.Schema({
  recipeName: "Sarma (stuffed cabbage rolls)",
  description: "Very delicious traditional Macedonian meal.",
  cookingDuration: "4 hours",
  ingredients: ["minced meat", "cabbage", "salt", "pepper", "rice", "water"],
  servings: 4,
  difficulty: "HARD",
  cuisine: "Macedonian"
});

const Recipe = mongoose.model('Recipe', recipeSchema);


app.use(bodyParser.json());


app.post('/recipes', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (recipe) {
      res.json({ message: 'Recipe deleted' });
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.put('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
