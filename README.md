# Banner Parallax

### 2 scenas branch WIP

What's that ?
-------
-This is a **parallax.js** experiment created only for learnig.

But in this point, i think that *can be useful for a variety of pourposes*, so i go to work in it one more deep level...

<<<<<<< HEAD



=======
![imagen estática del resultado](http://recursos.yoytuweb.hol.es/banner-parallax/images/aldeaweb_com.jpg)

The demo page is <a href="http://recursos.yoytuweb.hol.es/banner-parallax/banner.html" target="_blank">banner.html</a> , where you can see in action the base idea.
>>>>>>> 2_scenas


**Added styl file** to use Stylus preprocessor.

I use node.js with this command *(add -c to compress the css ouput and autoprefixer-stylus --with "{ browsers: ['ie 7', 'ie 8'] }" if you want specific options to use in the especific plugin)*:

```bash
stylus -u nib -u autoprefixer-stylus --with "{ browsers: ['last 8 versions','ie 7', 'ie 8'] }" -w banner.styl -o ../css/
```

Also, in Windows &amp; Mac you have a free tool called **PrePros**, and Mac users have **CodeKit**. Those are tools used to preprocess diferent languajes as *jade, sass, scss, stylus, etc...*.