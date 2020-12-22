const {Router} = require('express');

const router = Router();

router.get('/', (req,res) => {
    res.render('index.html', {
        title: 'ChaeJ-Blog',
        username: '김채정'
    });
})

// 카테고리 페이지
// 1. 카페모음
router.get('/cafe', (req, res) => {
    res.render('cafe.html');
});

// 2. 맛집추천
router.get('/food', (req, res) => {
    res.render('food.html');
});

// 3. 일상
router.get('/daily', (req, res) => {
    res.render('daily.html');
});

// 4. 일기
router.get('/diary', (req, res) => {
    res.render('diary.html');
});

// 5. 리뷰★
router.get('/review', (req, res) => {
    res.render('review.html');
});

module.exports = router;