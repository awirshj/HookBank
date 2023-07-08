<script>
  import { facebook, instagram, linkedin, twitter } from "../../assets";

  // Component logic
</script>

<!-- Component markup -->
<img src={instagram} alt="instagram" />
<img src={linkedin} alt="linkedin" />
<img src={twitter} alt="twitter" />
<img src={facebook} alt="facebook" />

<style>
  img {
    cursor: pointer;
    transition: all 0.3s ease-in;
  }
  img:hover {
    transform: translateY(-3px);
  }
  /* Component styles */
</style>
