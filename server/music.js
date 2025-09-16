require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const SUNO_API_KEY = process.env.SUNO_API_KEY;
const SUNO_API_URL = 'https://api.sunoapi.com/api/v1/suno/create';

// POST /generate-music
router.post('/generate-music', async (req, res) => {
	const { prompt, title, tags, make_instrumental, custom_mode } = req.body;
	try {
		const response = await axios.post(
			`${SUNO_API_URL}/create`,
			{
				custom_mode: !!custom_mode,
				prompt,
				title: title || "EduBloom Music",
				tags: tags || "edubloom, ai, music",
				make_instrumental: !!make_instrumental
			},
			{
				headers: {
					Authorization: `Bearer ${SUNO_API_KEY}`,
					'Content-Type': 'application/json',
				},
			}
		);
		const taskId = response.data.taskId || response.data.id;
		res.json({ taskId });
		} catch (error) {
			console.error("Suno API error:", error);
			if (error.response) {
				console.error("Suno API response:", error.response.data);
			}
			let message = "Unknown error";
			if (error.response && error.response.data) {
				message = error.response.data.error || JSON.stringify(error.response.data);
			} else if (error.message) {
				message = error.message;
			}
			res.status(500).json({ error: message });
		}
});

// GET /status/:taskId
router.get('/status/:taskId', async (req, res) => {
	const { taskId } = req.params;
	try {
		const response = await axios.get(
			`${SUNO_API_URL}/v1/music/status/${taskId}`,
			{
				headers: {
					Authorization: `Bearer ${SUNO_API_KEY}`,
				},
			}
		);
		// Assume response.data contains status and audio_url
		res.json({ status: response.data.status, audio_url: response.data.audio_url });
		} catch (error) {
			let message = "Unknown error";
			if (error.response && error.response.data) {
				message = error.response.data.error || JSON.stringify(error.response.data);
			} else if (error.message) {
				message = error.message;
			}
			res.status(500).json({ status: "error", audio_url: null, error: message });
		}
});

module.exports = router;
