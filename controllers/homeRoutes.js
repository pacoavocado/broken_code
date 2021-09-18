const router = require('express').Router();
const { Album, User, Tour } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
  
    res.render('homepage', {
      
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    
  }
});

router.get('/album', async (req, res) => {
  try {
    // Get all albums and JOIN with user data
    const albumData = await Album.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const albums = albumData.map((album) => album.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('album', {
      
      albums,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/album/:id', async (req, res) => {
  try {
    const albumData = await Album.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    // const album = albumData.get({ plain: true });
    const album = albumData.map((album) => album.get({ plain: true }));
    res.render('album', {
      ...album,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Album }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/signup');
    return;
  }

  res.render('login');
});

// router.get('/discography', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.render('discography');
//     return;
//   }

//   res.render('discography');
// });

router.get('/tour', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const tourData = await Tour.findAll();

    // Serialize data so the template can read it
    const tours = tourData.map((tour) => tour.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('tour', {
      tours,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/discography', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const albumData = await Album.findAll();

    // Serialize data so the template can read it
    const albums = albumData.map((album) => album.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('discography', {
      albums,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const userData = await User.findAll();

    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('signup', {
      users,

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tourinput', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    // Get all blogs and JOIN with user data
    const tourData = await Tour.findAll();

    // Serialize data so the template can read it
    const tours = tourData.map((tour) => tour.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('tourinput', {
      tours,

    });
  } catch (err) {
    res.status(500).json(err);
}});

router.get('/albuminput', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    // Get all blogs and JOIN with user data
    const albumData = await Album.findAll();

    // Serialize data so the template can read it
    const albums = albumData.map((album) => album.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('albuminput', {
      albums,

    });
  } catch (err) {
    res.status(500).json(err);
}});

// router.get('/albuminput', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.render('albuminput');
//     return;
//   }
//   const album = albumData.get({ plain: true });

//   res.render('albuminput', {
//     ...album,
//     logged_in: req.session.logged_in,
//   });
//   res.render('/');
// });

router.get('/gallery', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render('gallery');
    return;
  }

  res.render('gallery');
});

router.get('/faq', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render('faq');
    return;
  }

  res.render('faq');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render('signup');
    return;
  }

  const user = userData.get({ plain: true });

  res.render('user', {
    ...user,
    logged_in: req.session.logged_in,
  });
  res.render('/');
});
module.exports = router;
