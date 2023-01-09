<form id="form" method="post" action="/upload">
  <input type="file" id="files" name="files" multiple />
  <input type="submit" value="Upload" />
</form>

<script>
  const input = document.getElementById('files');
  const form = document.getElementById('form');

  input.addEventListener('change', () => {
    const files = input.files;
    // Only upload image files
    const imageFiles = [...files].filter(file => file.type.match(/image\/*/));
    input.files = imageFiles;
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const files = input.files;
    // Do something with the selected files
  });
</script>
