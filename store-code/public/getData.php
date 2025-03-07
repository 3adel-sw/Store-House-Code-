<?php
header('Content-Type: application/json');
$images = [
    ['src' => 'path/to/image1.jpg', 'title' => 'THE CLASSIC'],
    ['src' => 'path/to/image2.jpg', 'title' => 'Street Style'],
    ['src' => 'path/to/image3.jpg', 'title' => 'Adventure']
];
echo json_encode($images);
?>
