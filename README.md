# Banner Parallax

### 2 scenas branch WIP

What's that ?
-------
-This is a **parallax.js** experiment created only for learnig.

But in this point, i think that *can be useful for a variety of pourposes*, so i go to work in it one more deep level...


**Added styl file** to use Stylus preprocessor.

I use node.js with this command *(add -c to compress the css ouput and autoprefixer-stylus --with "{ browsers: ['ie 7', 'ie 8'] }" if you want specific options to use in the especific plugin)*:

```bash
stylus -u nib -u autoprefixer-stylus --with "{ browsers: ['last 8 versions','ie 7', 'ie 8'] }" -w banner.styl -o ../css/
```

Also, in Windows &amp; Mac you have a free tool called **PrePros**, and Mac users have **CodeKit**. Those are tools used to preprocess diferent languajes as *jade, sass, scss, stylus, etc...*.
