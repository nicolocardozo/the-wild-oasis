import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ahibpqyogncuxjnciyll.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoaWJwcXlvZ25jdXhqbmNpeWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMDcxNjIsImV4cCI6MjAxNDY4MzE2Mn0.m3ZUC3p7i2fakeWdDagDSdSdoClT1GhYmAcrF6WcNLQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
