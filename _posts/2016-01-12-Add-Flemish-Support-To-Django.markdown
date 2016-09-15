# Add Flemish (nl-BE) support to Django

This tutorial will help you add Flemish (Belgian Dutch, or nl-BE) support for Django (or any combination of language and locale, such as en-GB, en-US or fr-CA for instance).

This was really troublesome as I found Django's help on the subject really hard to understand, and there weren't any helpful resources that I could find on the Internet about this.

Furthermore, Django's tools themselves don't seem to do things right (```./manage.py compilemessages --locale nl-be` doing the wrong thing in this instance).

## Settings.py
Open your ``settings.py`` file and add the new language to your ``LANGUAGES`` parameter like so:

{% highlight python %}
LANGUAGES = (
    ('en', _('English')),
    ('nl-be', _('Flemish')),
)
{% endhighlight %}

## Locale translation files
Now let's use Django's ``makemessages`` command to create translation files for our new language!

{% highlight bash %}
(venv)Antonins-MacBook-Air:myproject antonin$ ./manage.py makemessages --locale nl_BE
{% endhighlight %}

**Note that we wrote the language code differently than in ``settings.py``! This is very important, as Django won't load the tranlsations otherwise!**

Then, you just need to put your translations inside the new ``nl_BE/`` directory in your ``locale`` folder(s) and compile them:

{% highlight bash %}
(venv)Antonins-MacBook-Air:myproject antonin$ ./manage.py compilemessages
{% endhighlight %}
