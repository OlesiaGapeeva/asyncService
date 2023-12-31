# Generated by Django 4.2.4 on 2023-09-18 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Responses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(blank=True, choices=[('registered', 'Зарегистрирован'), ('moderating', 'Проверяется'), ('approved', 'Принято'), ('denied', 'Отказано'), ('deleted', 'Удалено')], max_length=255, null=True)),
                ('creation_date', models.DateField(blank=True, null=True)),
                ('approving_date', models.DateField(blank=True, null=True)),
                ('publication_date', models.DateField(blank=True, null=True)),
                ('moderator', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'db_table': 'responses',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ResponsesVacancies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'responses_vacancies',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login', models.IntegerField(blank=True, null=True)),
                ('passw', models.CharField(blank=True, null=True)),
            ],
            options={
                'db_table': 'users',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Vacancies',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('adress', models.CharField(blank=True, max_length=255, null=True)),
                ('time', models.CharField(blank=True, max_length=255, null=True)),
                ('salary', models.IntegerField()),
                ('company', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=255, null=True)),
                ('exp', models.CharField(blank=True, max_length=255, null=True)),
                ('image', models.TextField(blank=True, null=True)),
                ('info', models.TextField(blank=True, null=True)),
                ('requirements', models.TextField(blank=True, null=True)),
                ('conditions', models.TextField(blank=True, null=True)),
                ('status', models.CharField(choices=[('enabled', 'enabled'), ('deleted', 'deleted')], max_length=255)),
            ],
            options={
                'db_table': 'vacancies',
                'managed': False,
            },
        ),
    ]
