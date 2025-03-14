-- Storage policies for the publications bucket
-- Allow authenticated users to select/download their files
CREATE POLICY "Allow authenticated users to select publications"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'publications');

-- Allow authenticated users to insert files
CREATE POLICY "Allow authenticated users to insert publications"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'publications');

-- Allow authenticated users to update their files
CREATE POLICY "Allow authenticated users to update publications"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'publications');

-- Allow authenticated users to delete their files
CREATE POLICY "Allow authenticated users to delete publications"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'publications');