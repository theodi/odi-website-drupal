ODI Corporate Website
=====================

This is the ODI's corporate Drupal website. We're currently working towards getting a sane development path for this, and we currently have a reliable copy of the code in version control. Coming soon are:

* Getting assets into a CDN (so no more images in Git repos)
* Cucumber tests for new features
* Continuous deployment(?)

## Running the website locally

Using the power of [Drush](http://drush.ws), we can now run the Drupal website on a development server with a simple terminal command in a Rails-esque stylee, and no messing around with Apache. Yay! There's a couple of steps to do this reliably:

* First of all, install Drush. You can do this easily on a Mac (with Homebrew installed) by simply running `brew install drush`, you can also use apt-get on Ubuntu, by running `sudo apt-get install drush`
* On a Mac (not sure if this is the case on Ubuntu), you'll also need the CGI version of PHP, which [you can get from here](http://www.aprelium.com/abyssws/php.html#mac). Next copy the the PHP5 file to somewhere on your computer and symlink it into somewhere in your PATH like so `ln -s /Path/To/PHP5/bin/php-cgi /usr/local/bin/php-cgi`
* In your `PHP5` directory, open the `lib/php.ini` directory and add the line `extension = memcache.so`, and change 
* Next, install and run MySQL, and set up a database for Drupal to run on
* Next step is to get a working copy of the database. Hop onto the live server, navigate to the root `www` directory and type `drush sql-dump > ../backups/yyyy-mm-dd-backup.sql` (obviously replacing yyyy-mm-dd with the date), then download the file using SCP or FTP.
* Also download a copy of the `sites/default/settings.php` file
* Copy your dowloaded `settings.php` file into the `sites/default` folder of this repo (MAKE SURE YOU DON'T COMMIT THIS TO GIT), and change the `$base_url` variable to `http://localhost:8080` and the `$database` variables to math the settings on your local machine. Also comment out the last two lines. I haven't yet worked out how to get Memcached running, but it shouldn't matter in dev.
* Next, copy your database dump into your root working directory on your local machine, and type `drush sqlc < {filename of database dump}`
* Now, all there is to do is run `drush rs 8080` (or whatever port you want the server to run on), and navigate to http://localhost:8080 in your browser. You should see the Drupal website in all its glory!