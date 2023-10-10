

            <option value="0">Série</option>
            <?php for ($s = 1; $s <= 9; $s++) { ?>
                <option value="<?php echo $s;?>"> <?php echo $s;?></option>
                <?php } ?>
          
        
        <?php
            if (!empty($_POST)){
                @$nome = $_POST["nome"];
                @$serie = $_POST["serie"]; ?>

                <p><?php echo "Aluno: ".$nome; ?></p>
                <p><?php echo "Série: ".$serie; ?></p>
            <?php} ?>
