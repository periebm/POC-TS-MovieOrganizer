--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    movie_id integer,
    genre text NOT NULL
);


--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    name text NOT NULL,
    platform text NOT NULL,
    status boolean DEFAULT false NOT NULL
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres ALTER COLUMN id SET DEFAULT nextval('public.genres_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genres VALUES (1, 1, 'Drama');
INSERT INTO public.genres VALUES (2, 1, 'Crime');
INSERT INTO public.genres VALUES (3, 2, 'Crime');
INSERT INTO public.genres VALUES (4, 2, 'Drama');
INSERT INTO public.genres VALUES (5, 3, 'Crime');
INSERT INTO public.genres VALUES (6, 3, 'Drama');
INSERT INTO public.genres VALUES (7, 3, 'Thriller');
INSERT INTO public.genres VALUES (8, 4, 'Action');
INSERT INTO public.genres VALUES (9, 4, 'Crime');
INSERT INTO public.genres VALUES (10, 4, 'Drama');
INSERT INTO public.genres VALUES (11, 5, 'Drama');
INSERT INTO public.genres VALUES (12, 5, 'Thriller');
INSERT INTO public.genres VALUES (13, 6, 'Fantasy');
INSERT INTO public.genres VALUES (14, 6, 'Adventure');
INSERT INTO public.genres VALUES (15, 6, 'Action');
INSERT INTO public.genres VALUES (16, 7, 'Action');
INSERT INTO public.genres VALUES (17, 7, 'Thriller');
INSERT INTO public.genres VALUES (18, 7, 'Sci-Fi');
INSERT INTO public.genres VALUES (19, 8, 'Drama');
INSERT INTO public.genres VALUES (20, 8, 'Romance');
INSERT INTO public.genres VALUES (21, 9, 'Action');
INSERT INTO public.genres VALUES (22, 9, 'Sci-Fi');
INSERT INTO public.genres VALUES (23, 10, 'Crime');
INSERT INTO public.genres VALUES (24, 10, 'Drama');
INSERT INTO public.genres VALUES (25, 11, 'Sci-Fi');
INSERT INTO public.genres VALUES (26, 11, 'Adventure');
INSERT INTO public.genres VALUES (27, 12, 'Thriller');
INSERT INTO public.genres VALUES (28, 12, 'Crime');
INSERT INTO public.genres VALUES (29, 13, 'Action');
INSERT INTO public.genres VALUES (30, 13, 'Adventure');
INSERT INTO public.genres VALUES (33, 15, 'Drama');
INSERT INTO public.genres VALUES (34, 15, 'Biography');


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (1, 'The Shawshank Redemption', 'Netflix', false);
INSERT INTO public.movies VALUES (2, 'The Godfather', 'Amazon', false);
INSERT INTO public.movies VALUES (3, 'Pulp Fiction', 'HBO', false);
INSERT INTO public.movies VALUES (4, 'The Dark Knight', 'Hulu', false);
INSERT INTO public.movies VALUES (5, 'Fight Club', 'Netflix', false);
INSERT INTO public.movies VALUES (6, 'The Lord of the Rings', 'Netflix', false);
INSERT INTO public.movies VALUES (7, 'Inception', 'Amazon', false);
INSERT INTO public.movies VALUES (8, 'Forrest Gump', 'Netflix', false);
INSERT INTO public.movies VALUES (9, 'The Matrix', 'HBO', false);
INSERT INTO public.movies VALUES (10, 'Goodfellas', 'Hulu', false);
INSERT INTO public.movies VALUES (11, 'Interstellar', 'Netflix', false);
INSERT INTO public.movies VALUES (12, 'The Silence of the Lambs', 'Amazon', false);
INSERT INTO public.movies VALUES (13, 'Avengers: Endgame', 'Netflix', false);
INSERT INTO public.movies VALUES (15, 'The Social Network', 'Hulu', false);
INSERT INTO public.movies VALUES (23, 'Titanic', 'netflix', false);


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genres_id_seq', 34, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 26, true);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: movies movies_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_name_key UNIQUE (name);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: genres genres_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id);


--
-- PostgreSQL database dump complete
--

