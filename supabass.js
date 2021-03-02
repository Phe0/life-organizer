const { createClient } = require('@supabase/supabase-js');

const supabass = createClient(process.env.API_URL, process.env.API_KEY);

module.exports = { supabass }