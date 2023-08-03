# midterm

Terdapat Client Side (Frontend) dan Server (Backend) didalam project video midterm ini, tetapi yang saya kumpulkan hanya server side saja, sesuai tugas yang diberikan dalam Midterm Generasi Gigih 3.0

Penjelasan Database yang telah dibuat yaitu 
Pertama membuat model (video) dan comment (model user bisa diabaikan) secara terpisah file untuk merepresentasikan struktur data yang akan disimpan dalam MongoDB dengan  database "video" 
colection videos, product, dan user (untuk user bisa diabaikan). 
Selanjutnya untuk dapat operasi CRUD di dalam folder controller yang telah disediakan oleh Mongoose agar dapat berinteraksi dengan database MongoDbB dan mengelolanya sesuai dengan API yang telah dibuat.

API yang saya gunakan yaitu didalam folder route/Video
1. post untuk menambahkan video
2. put untuk update video
3. delete untuk menghapus video
4. get untuk mendapatkan video
5. untuk trend dan random hanya tambahan

API untuk fitur comment masih dalam tahap pengembangan (belum jadi karena kehabisan waktu)

How to run in your local
1. Clone this repo
2. git init, already have mongoDB and postman
3. test API in postman
